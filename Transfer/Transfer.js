import React from 'react';

const Transfer = () => {
    return ( 
        <React.Fragment>
        <div className='container'>
      <br></br>
      <br></br>
      <br></br>
        
        <table class="table table-striped">
        <thead>
        <tr>
        <th scope="col">From</th>
        <th scope="col">To</th>
        <th scope="col">Amount</th>
        <th scope="col">Date</th>
        </tr>
    </thead>
    <tbody className='text-primary'>
        <tr>
        <th>Mohamed</th>
        <td>Mark</td>
        <td>3100$</td>
        <td>8-10-2022</td>
        </tr>
        <tr>
        <th>Mark</th>
        <td>Jacob</td>
        <td>2200$</td>
        <td>6-10-2022</td>
        </tr>
        <tr>
        <th>Omar</th>
        <td>Tony</td>
        <td>5000$</td>
        <td>4-10-2022</td>
        </tr>
        <tr>
        <th>Moaaz</th>
        <td>Mark</td>
        <td>3560$</td>
        <td>1-10-2022</td>
        </tr>
        <tr>
        <th>Amr</th>
        <td>Mohamed</td>
        <td>13000$</td>
        <td>29-9-2022</td>
        </tr>
        <tr>
        <th>Tony</th>
        <td>Amr</td>
        <td>3200$</td>
        <td>25-9-2022</td>
        </tr>
        <tr>
        <th>Yussef</th>
        <td>Moaaz</td>
        <td>2000$</td>
        <td>20-9-2022</td>
        </tr>
        <tr>
        <th>Omar</th>
        <td>Tony</td>
        <td>4150$</td>
        <td>17-9-2022</td>
        </tr>
    </tbody>
    </table>
    
    </div> 
</React.Fragment>
     );
}
 
export default Transfer;