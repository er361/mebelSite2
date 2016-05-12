/* eslint-disable no-console, no-shadow */
import path from 'path';
import webpack from 'webpack';
import express from 'express';
import graphQLHTTP from 'express-graphql';
import WebpackDevServer from 'webpack-dev-server';
import historyApiFallback from 'connect-history-api-fallback';
import chalk from 'chalk';
import webpackConfig from '../webpack.config';
import config from './config/environment';

//multer
import multer from 'multer';

//database modules
import graffiti from '@risingstack/graffiti';
import { getSchema } from '@risingstack/graffiti-mongoose';
import mongoose from 'mongoose';
import { json } from 'body-parser';

//mongoose models
import Category from './models/Category.js';
import Mebel from './models/Mebel.js';


if (config.env === 'development') {
  //connect database
  mongoose.connect(`mongodb://${config.development.mongodb}`);

  // Launch GraphQL
  const graphql = express();
  graphql.use(json());
  graphql.use(graffiti.express({
  schema: getSchema([Category, Mebel])
  }));
  graphql.listen(config.graphql.port, () => console.log(chalk.green(`GraphQL is listening on port ${config.graphql.port}`)));

  // Launch Relay by using webpack.config.js
  const relayServer = new WebpackDevServer(webpack(webpackConfig), {
    contentBase: '/build/',
    proxy: {
      '/graphql': `http://localhost:${config.graphql.port}`
    },
    stats: {
      colors: true
    },
    hot: true,
    historyApiFallback: true
  });

  // Serve static resources
  relayServer.use('/', express.static(path.join(__dirname, '../build')));

  //multer
  var storage = multer.diskStorage({
    destination: (req,file,cb) => {
      cb(null,path.resolve(__dirname, '../client/assets/uploads'))
    },filename: (req,file,cb) => {
      cb(null,file.originalname)
    }
  });

  relayServer.use('/uploads',multer({storage:storage}).any('image'),(req,res)=>{
    //  console.log(req.url);
    //  console.log(req.headers);
    //  console.log(req.body);
    //  console.log(req.files);
     //res.json(req.body);
    res.sendStatus(200);
  });
  relayServer.listen(config.port, () => console.log(chalk.green(`Relay is listening on port ${config.port}`)));
  // multer
} else if (config.env === 'production') {
  // Launch Relay by creating a normal express server
  const relayServer = express();
  relayServer.use(historyApiFallback());
  relayServer.use('/', express.static(path.join(__dirname, '../build')));
  relayServer.use('/graphql', graphQLHTTP({ schema }));
  relayServer.listen(config.port, () => console.log(chalk.green(`Relay is listening on port ${config.port}`)));
}
