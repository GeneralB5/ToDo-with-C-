import { useState } from "react";

function OptionsMenu({setSelectedValue,selectedValue})
{
    const [isOpen, setIsOpen] = useState(false)

  
    const options = [
      {title:'Date ↓',value:[{ prop: 'expDate', orden: 'desc' }]},
      {title:'Date ↑',value:[{ prop: 'expDate', orden: 'asc' }]},
      {title:'Priority ↓',value:[{ prop: 'priority', orden: 'desc' }]},
      {title:'Priority ↑',value:[{ prop: 'priority', orden: 'asc' }]},
      {title:'Date & Priority ↓',value:[
             { prop: 'expDate', orden: 'desc' } ,
             { prop: 'priority', orden: 'desc' }
         ]},
    ]
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen)
    }
  
    const handleSelect = (value) => {
      console.log(value)
      setSelectedValue(value)
      setIsOpen(false)
    }
  
    return (
      <div>
        <button style={isOpen==false?
        {
          margin:10,
          position:"absolute",
          borderRadius:4,
          border:'none',
          backgroundColor:"whitesmoke",
          fontWeight:'450',
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
        }:
        {
          margin:10,
          position:"absolute",
          border:'none',
          backgroundColor:"whitesmoke",
          fontWeight:'450',
          borderTopLeftRadius:4,
          borderTopRightRadius:4,
          boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
        }
      } onClick={toggleDropdown}>
          {selectedValue.title}
        </button>
        {isOpen && (
          <ul className="ulMenu">
            {options.map((option) => (
              <li key={option.title} style={option.title == selectedValue.title?{display:"none"}:{}} onClick={() => handleSelect(option)}>
                {option.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
export default OptionsMenu