import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector, useDispatch } from 'react-redux'

const ContactList = () => {
  const dispatch = useDispatch();
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);
  let [filteredList, setFilteredList] = useState([]);

  const deleteItem = (idx) => {
    let list = contactList.filter((item, id) => idx !== id);
    console.log("list: ", list);
    dispatch({ type: "DELETE_ITEM", payload: { list } })
  };

  const allItem = () => {
    setFilteredList(contactList);
    if (keyword !== "") {
      dispatch({ type: "DELETE_KEYWORD" });
    };
  };

  useEffect(() => {
    console.log("keyword: ", keyword)
    console.log("contactList: ", contactList)
    if (keyword !== "") {
      let list = contactList.filter((item) => item.name.includes(keyword));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);

  useEffect(() => {
    console.log("filteredList: ", filteredList)
  }, [filteredList]);

  return (
    <div>
      <SearchBox allItem={allItem}/>
      <div className='item-list-box'>
        num:{filteredList.length}
        {filteredList.map((item, idx) => (
          <ContactItem key={idx} item={item} idx={idx} deleteItem={deleteItem} keyword={keyword}/>
        ))}
      </div>
    </div>
  )
}

export default ContactList
