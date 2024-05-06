import './roundedCat.css'



export default function RoundedCat(props){
    return <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center',
        margin:'0px 10px'

    }}>
        
    <div className="roundedCatMain" style={{
        backgroundImage:`url(${props.img})`
    }}>

    </div>
    <div className='categoryHeading'>
        <h1>{props.name}</h1>
    </div>
    
    </div>
    
}