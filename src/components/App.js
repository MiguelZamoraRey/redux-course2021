import React, {Component} from 'react';

class App extends Component {

  putRows = () =>[
    <tr>
      <td>pete</td>
      <td>pete@example.com</td>
      <td>pete.com</td>
    </tr>,
    <tr>
      <td>mzrdeveloper</td>
      <td>miguelzamorarey@example.com</td>
      <td>mzrdeveloper.com</td>
    </tr>
  ]

  render(){
    return (
      <div className="margen">
        <table className="tabla">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Enlace</th>
            </tr>
          </thead>
          <tbody>
            {this.putRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
