import './List.css'
const List = (props) => {

    const deleteItem = (key) => {
        let newList = props.items.filter(itemObj =>{
            return itemObj.key !== key
        })
        props.onNewData(newList)
    }

    const listItems = props.items.map((itemObj)=>{
        return <div className='ListDiv'> 
        <p>{itemObj.item}<button onClick={()=>deleteItem(itemObj.key)} className='button'>-</button></p>
    
    </div>})
    return (
       <div>{listItems}</div>
            
    )
}

export default List;