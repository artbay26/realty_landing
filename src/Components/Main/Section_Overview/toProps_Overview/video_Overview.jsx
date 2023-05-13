
const OverviewVideo = (props) => {
    return (
        <div className="overview__imagesBox" >
            {
            props.VideotoProps.map(el =>       
                <img
                 key={el.id}   
                src={el.video}
                    alt={el.name}                            
                />                         
                )}
        </div>            
    )
}
export default OverviewVideo                     
                                  
                                            
            
        
    