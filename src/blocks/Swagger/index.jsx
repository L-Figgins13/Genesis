import React, {Component} from 'react';
import SwaggerUi, {presets} from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';

export default class SwaggerAPI extends Component {
  componentDidMount() {
    SwaggerUi({
      dom_id: '#swaggerContainer',
      url: `/Pirate_Party_API.yaml`,
    });
  }

  render() {
    return (
      <div id="swaggerContainer" />
    );
  }
}


