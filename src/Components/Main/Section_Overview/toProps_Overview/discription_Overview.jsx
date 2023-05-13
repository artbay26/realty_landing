const OverviewDiscription = (props) => {

    return (  
                    
            
        props.discriptiontoProps.map(el =>       
            <div className="overview__discription discription" key={el.id}>
                    <img
                        
                        src={el.img}
                        alt={el.name}                            
                    /> 
                    <p className="discription__text"> {el.text}</p>                        
            </div>  
            ) 
            
               
    )
}

export default OverviewDiscription
        
                    
                
       
   