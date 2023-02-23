import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  Box,
  Rating,
  Typography,
  Avatar,
} from "@mui/material"
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';


function Comentarios() {
  const { user } = useAuth0() // de auth0 nos traemos el nombre del usuario logueado que va a hacer el comentario
  //Estado inicial del form del comentario
  const reviewInitialState = {
    userName: user?.name || "",
    comentario: '',
    rating: 1
  }
  const [review, setReview] = useState({ ...reviewInitialState }) // estado del form del comentario
  const [comentarios, setComentarios] = useState([]) // estado que almacena el array de comentarios

  // este useEffect se capta los comentarios del local storage en el primer render
  useEffect(() => {
    let item = window.localStorage.getItem('comentarios')
    if (item) {
      setComentarios(JSON.parse(item))
    }
  }, [])

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    setReview(values => ({ ...values, [name]: value }))
  }

  const handleDelete = (comment) => {
    const newComents = comentarios.filter(c => c.comentario !== comment)
    window.localStorage.setItem('comentarios', JSON.stringify(newComents))
    //este checa el local storage si hay nuevos comentarios
    let item = window.localStorage.getItem('comentarios')
    if (item) {
      setComentarios(JSON.parse(item))
    }
  }


  // este handlesubmit guarda el array de comentarios en el local storage
  const hanldeSubmit = (e) => {
    e.preventDefault()
    const newComents = comentarios.concat([review])
    window.localStorage.setItem('comentarios', JSON.stringify(newComents))
    //checa el local storage si hay nuevos comentarios
    let item = window.localStorage.getItem('comentarios')
    if (item) {
      setComentarios(JSON.parse(item))
    }
    //resetea el form
    setReview(reviewInitialState)
  }

  return (
    <>
      <div style={{background: "black"}} className='container-fluid  w-100'>
        <h2 className=' container d-flex justify-content-center pb-3'>
          Espacio de comentarios y recomendaciones sobre el artista
        </h2>
        <div className='contianer-fluid d-flex justify-content-center'>
          <form onSubmit={hanldeSubmit}>
            <Input className='bg-white text-dark mb-3' placeholder='Ingrese comentario' type="text" name="comentario" value={review.comentario} onChange={handleChange} />
            <Avatar src={user.picture} alt={user} onChange={handleChange} />
            <Typography>{review.userName}</Typography>
            <Typography component="legend">Rating</Typography>
            <Rating
              name="rating"
              size="large"
              type="number"
              max={5}
              min={1}
              value={review.rating}
              onChange={handleChange}
            />
            <Button type="submit">Enviar</Button>
          </form>
        </div>
        {
          comentarios && comentarios.map((c, index) => (
            <>
              <div className='container-fluid bg-dark '>
                <div className='d-flex justify-content-center'>
                  <h3 className='text-warning'>{c.userName}</h3>
                  <div className='ms-3 d-flex mt-1 '>
                      <h4>Rating: {c.rating}</h4>
                  </div>
                
                  <Rating
                    name="simple-controlled"
                    size="large"
                    precision={0.5}
                    value={c.rating}
                    onChange={handleChange}
                  />
                  <p>{c.comentario}</p>
                  <div>
                    <Button type="button" onClick={() => handleDelete(c.comentario)}>
                      Delete
                    </Button>
                  </div>
                  <Avatar src={user.picture} alt={user} onChange={handleChange} />
                </div>
              </div>
            </>
          ))
        }
      </div>
    </>
  )
}

export default Comentarios



