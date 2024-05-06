import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ResponsiveAppBar from '../../components/bar2';
import './style.css';


 function UpdatedStoreView() {
    const namesData = [
        'Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice','Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank', 'George', 'Hannah', 'Isaac', 'Jack', 'Katherine', 'Liam', 'Mia', 'Noah', 'Olivia', 'Paul', 'Quinn', 'Rachel', 'Samuel', 'Thomas', 'Ursula', 'Victor', 'Wendy', 'Xavier', 'Yvonne', 'Zachary'
      ];
    
      // Extracting unique alphabets from names
      const alphabets = [...new Set(namesData.map(name => name[0].toUpperCase()))].sort();
    
      // State to store selected alphabet
      const [selectedAlphabet, setSelectedAlphabet] = useState('A');
    
      // Function to handle alphabet selection
      const handleAlphabetClick = (alphabet) => {
        setSelectedAlphabet(alphabet);
      };

      const filteredNames = selectedAlphabet ? namesData.filter(name => name.toUpperCase().startsWith(selectedAlphabet)) : namesData;


      const numColumns = Math.min(Math.ceil(filteredNames.length / 5), 3);

      const renderNames = () => {
        const columns = [];
        for (let i = 0; i < numColumns; i++) {
          const start = i * 5;
          const end = Math.min((i + 1) * 5, filteredNames.length);
          const columnNames = filteredNames.slice(start, end);
          const column = (
            <ul key={i}>
              {columnNames.map((name, index) => (
                <li className="nameItem" style={{
                    margin:'15px',
                    textDecoration: 'none' 
                }} key={index}>{name}</li>
              ))}
            </ul>
          );
          columns.push(column);
        }
        return columns;
      };


    return (<>
    
        <header>
        <ResponsiveAppBar activePage={'All Stores'} />
        </header>
        
        <div className='updatedStoreMain'>

        <div className='alphabetsTop'>
              <Grid container>
                <Grid item lg={1}>
                    
                </Grid>
                <Grid item lg={10}>
                <h1 style={{
                color:'black',
                fontSize:'24px',
                margin:'32px 0px'
             }}>
                    Browse Stores Starting with {selectedAlphabet}
             </h1>
                 
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
        {/* Render alphabets at the top */}
        {alphabets.map((alphabet, index) => (
          <span key={index} style={{ marginRight: '5px', cursor: 'pointer', fontWeight: selectedAlphabet === alphabet ? 'bold' : 'normal', padding:'12px',borderBottom:selectedAlphabet === alphabet ?'4px solid black':'4px solid transparent'}} onClick={() => handleAlphabetClick(alphabet)}>
            {alphabet}
          </span>
        ))}
      </div>
                </Grid>
                <Grid item lg={1}>

                </Grid>
              </Grid>

      </div>
             
             <Grid container sx={{
                // backgroundColor:'white'
             }} >
                 <Grid item lg={1}>
 
                 </Grid>
                 <Grid item lg={10}>
            

     <div style={{ display: 'flex' }}>
        {/* Render names in bullet list view */}
        {renderNames().map((column, index) => (
          <div className='linkForStore' key={index} style={{ flex: 1 }}>
            {column}
          </div>
        ))}
      </div>
   
                 </Grid>
                 <Grid item lg={1}>
 
                 </Grid>
             </Grid>
        </div>
     </>)
}


export default UpdatedStoreView;