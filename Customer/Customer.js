import React from 'react';

const Customer = () => {
    return ( 
        <React.Fragment>
        <div className='container'>
      <br></br>
      <br></br>
      <br></br>
        
        <table class="table table-striped">
        <thead>
        <tr>
        <th scope="col">Account Number</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Balance</th>
        </tr>
    </thead>
    <tbody className='text-primary'>
        <tr>
        <th scope="row">987456</th>
        <td>Mark</td>
        <td>Mark@gmail.com</td>
        <td>100000$</td>
        </tr>
        <tr>
        <th scope="row">987654</th>
        <td>Jacob</td>
        <td>Jacob@gmail.com</td>
        <td>50000$</td>
        </tr>
        <tr>
        <th scope="row">987004</th>
        <td>Yussef</td>
        <td>Yussef@gmail.com</td>
        <td>40000$</td>
        </tr>
        <tr>
        <th scope="row">987304</th>
        <td>Moaaz</td>
        <td>Moaaz@gmail.com</td>
        <td>65000$</td>
        </tr>
        <tr>
        <th scope="row">981385</th>
        <td>Amr</td>
        <td>Amr@gmail.com</td>
        <td>110000$</td>
        </tr>
        <tr>
        <th scope="row">967538</th>
        <td>Omar</td>
        <td>Omar@gmail.com</td>
        <td>250000$</td>
        </tr>
        <tr>
        <th scope="row">959343</th>
        <td>Tony</td>
        <td>Tony@gmail.com</td>
        <td>450000$</td>
        </tr>
        <tr>
        <th scope="row">985810</th>
        <td>Mohamed</td>
        <td>Mohamed@gmail.com</td>
        <td>150000$</td>
        </tr>
    </tbody>
    </table>
    
    </div> 
</React.Fragment>
     );
}
 
export default Customer;