import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
function DataFetching() {
	const [post, setPost] = useState([])
	const [token, setToken] = useState('')
	// const [id, setId] = useState(1)
	// const [idFromButtonClick, setIdFromButtonClick] = useState(1)

	useEffect(() => {
		axios
			.get(`http://localhost:5000/windowlist`)
			.then(res => {
		 const final=[]
		const final2 =res.data.filter(result => {
           return result.windo_no 
            // console.log(result.s_name)
          })
		  final2.forEach((score) => {
			final.push(score.windo_no)
		});
		 
		  console.log({final})
		  setPost(final)
			})
		// 	.catch(err => {
		// 		console.log(err)
		// 	})
       

		axios
		.get( "http://localhost:5000/gtoken/517/3",{
			"m_number":9104883288
		})
		.then(res => {
			setToken(res.data)
			console.log(res.data,"dattaaa")
			}	)

	}, [])
    useEffect(() => {
		console.log(post)
		console.log(token)
       
	}, [post])

	// const handleClick = () => {
	// 	setIdFromButtonClick(id)
	// }

	return (
		<div>
			<input type="text"   />
			<button type="button" >Fetch Post</button>
			<div>
				{token.minutes}
				{token.hours}
				{token.bring}
				{token.sname}
				{token.windono}


			</div>
			{/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
            <Dropdown>
                                <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                                  Add Window
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
									

							 {post.map((item) => (
            <Dropdown.Item >
              {item}
            </Dropdown.Item>
          ))}



							

                            
                                </Dropdown.Menu>
                            </Dropdown>

{/* <ul> */}
				{/* {post.map(post => (
          <li key={post._id}>{post.windo_no}</li>
				))} */}
                {/* {post} */}
			{/* </ul> */}


            
		</div>

	)
}

export default DataFetching