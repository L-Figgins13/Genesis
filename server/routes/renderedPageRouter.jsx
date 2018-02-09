// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import Router from 'express';
// import {match, RouterContext} from 'react-router';


// import HelloWorld from '../../src/HelloWorld.jsx';
// import GamesList from '../../src/GamesList';

// import template from '../template.js';
// import routes from '../../src/Routes';

// import ContextWrapper from '../../src/ContextWrapper';


// const renderedPageRouter = new Router();

// renderedPageRouter.get('*', (req,res) => {
//     match({routes, location: req.url},
//     (error, redirectLocation, renderProps) => {
//         if(error) {
//             res.status(500).send(error.message);
//         } else if (redirectLocation) {
//             res.redirect(302, redirectLocation.pathname, +redirectLocation.search);
//         } else if (renderProps){
//             fetch(`http://localhost:3000/api${req.url}`)
//             .then(response => {
//                 response.json()
//                 .then(data => {
//                     const initialState = {data};
//                     const html = ReactDOMServer.renderToString(
//                         <ContextWrapper initialState = {initialState} >
//                             <RouterContext {...renderProps} />
//                             </ContextWrapper>
//                     );
//                     res.status(200).send(template(html,initialState));
//                 })
//                 .catch(err => {
//                     console.log(`Errror rendering to string: ${err}`);
//                 });
//             })
//         } else {
//             res.status(404).send('Not Found');
//         }
//     });
// });
// export default renderedPageRouter;