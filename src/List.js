import './List.css'
const List = (props) => {
    const listItems = props.items.map((itemObj)=>{return <div className='ListDiv'> <p>{itemObj.item}<button className='button'>-</button></p>
    
    </div>})
    return (
       <div>{listItems}</div>
            
    )
}

export default List;