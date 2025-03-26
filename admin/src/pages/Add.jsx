import React, { useState } from 'react'
import {assets} from '../assets/assets'
import axios from 'axios'
import {backendUrl} from '../App'
import { toast } from 'react-toastify'

const Add = ({token}) => {

  const [image1,setImage1] = useState(false)
  const [image2,setImage2] = useState(false)
  const [image3,setImage3] = useState(false)
  const [image4,setImage4] = useState(false)

  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [category,setCategory] = useState("Living Room");
  const [subCategory,setSubCategory] = useState("Sofas");
  const [bestseller,setBestseller] = useState(false);
  const [colors,setColors] = useState([]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData()

      formData.append("name",name)
      formData.append("description",description)
      formData.append("price",price)
      formData.append("category",category)
      formData.append("subCategory",subCategory)
      formData.append("bestseller",bestseller)
      formData.append("colors",JSON.stringify(colors))

      image1 && formData.append("image1",image1)
      image2 && formData.append("image2",image2)
      image3 && formData.append("image3",image3)
      image4 && formData.append("image4",image4)

      const response = await axios.post(backendUrl + "/api/product/add",formData,{headers:{token}})

      if (response.data.success) {
        toast.success(response.data.message)
        setName('')
        setDescription('')
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice('')
      } else {
        toast.error(response.data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col w-full items-start gap-3'>
      <div>
        <p className='mb-2'>Upload Image</p>

        <div className='flex gap-2'>
          <label htmlFor="image1">
            <img className='w-20' src={!image1 ? assets.upload_area : URL.createObjectURL(image1)} alt="" />
            <input onChange={(e)=>setImage1(e.target.files[0])} type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className='w-20' src={!image2 ? assets.upload_area : URL.createObjectURL(image2)} alt="" />
            <input onChange={(e)=>setImage2(e.target.files[0])} type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className='w-20' src={!image3 ? assets.upload_area : URL.createObjectURL(image3)} alt="" />
            <input onChange={(e)=>setImage3(e.target.files[0])} type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className='w-20' src={!image4 ? assets.upload_area : URL.createObjectURL(image4)} alt="" />
            <input onChange={(e)=>setImage4(e.target.files[0])} type="file" id="image4" hidden />
          </label>
        </div>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Name</p>
        <input onChange={(e)=>setName(e.target.value)} value={name} className='w-full maw-w-[500px] px-3 py-2' type="text" placeholder='Type here' required/>
      </div>

      <div className='w-full'>
        <p className='mb-2'>Product Description</p>
        <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='w-full maw-w-[500px] px-3 py-2' type="text" placeholder='Write content here' required/>
      </div>

      <div className='flex flex-col sm:flex-row gap-2 w-full sm:gap-8'>
        <div>
          <p className='mb-2'>Product Category</p>
          <select onChange={(e)=>setCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Living Room">Living Room</option>
            <option value="Dining Room">Dining Room</option>
            <option value="Bedroom">Bedroom</option>
            <option value="Office">Office</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Sub Category</p>
          <select onChange={(e)=>setSubCategory(e.target.value)} className='w-full px-3 py-2'>
            <option value="Sofas">Sofas</option>
            <option value="Tables">Tables</option>
            <option value="Chairs">Chairs</option>
            <option value="Beds">Beds</option>
            <option value="Buffets">Buffets</option>
            <option value="Desks">Desks</option>
            <option value="Wardrobes">Wardrobes</option>
            <option value="Nightstands">Nightstands</option>
            <option value="TV Stands">TV Stands</option>
            <option value="Dressers">Dressers</option>
          </select>
        </div>

        <div>
          <p className='mb-2'>Product Price</p>
          <input onChange={(e)=>setPrice(e.target.value)} value={price} className='w-full px-3 py-2 sm:w-[120px]' type="number" placeholder='50'/>
        </div>
      </div>

      <div>
        <p className='mb-2'>Product Colors</p>
        <div className='flex gap-3'>
          <div onClick={()=>setColors(prev => prev.includes("black") ? prev.filter(item => item !== "black") : [...prev,"black"])}>
            <p className={`${colors.includes("black") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>black</p>
          </div>

          <div onClick={()=>setColors(prev => prev.includes("white") ? prev.filter(item => item !== "white") : [...prev,"white"])}>
            <p className={`${colors.includes("white") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>white</p>
          </div>
          
          <div onClick={()=>setColors(prev => prev.includes("beige") ? prev.filter(item => item !== "beige") : [...prev,"beige"])}>
            <p className={`${colors.includes("beige") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>beige</p>
          </div>

          <div onClick={()=>setColors(prev => prev.includes("gray") ? prev.filter(item => item !== "gray") : [...prev,"gray"])}>
            <p className={`${colors.includes("gray") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>gray</p>
          </div>

          <div onClick={()=>setColors(prev => prev.includes("blue") ? prev.filter(item => item !== "blue") : [...prev,"blue"])}>
            <p className={`${colors.includes("blue") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>blue</p>
          </div>

          <div onClick={()=>setColors(prev => prev.includes("green") ? prev.filter(item => item !== "green") : [...prev,"green"])}>
            <p className={`${colors.includes("green") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>green</p>
          </div>

          <div onClick={()=>setColors(prev => prev.includes("oak") ? prev.filter(item => item !== "oak") : [...prev,"oak"])}>
            <p className={`${colors.includes("oak") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>oak</p>
          </div>

          <div onClick={()=>setColors(prev => prev.includes("walnut") ? prev.filter(item => item !== "walnut") : [...prev,"walnut"])}>
            <p className={`${colors.includes("walnut") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>walnut</p>
          </div>

          <div onClick={()=>setColors(prev => prev.includes("light wood") ? prev.filter(item => item !== "light wood") : [...prev,"light wood"])}>
            <p className={`${colors.includes("light wood") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>light wood</p>
          </div>

          <div onClick={()=>setColors(prev => prev.includes("dark blue") ? prev.filter(item => item !== "dark blue") : [...prev,"dark blue"])}>
            <p className={`${colors.includes("dark blue") ? "bg-pink-100" : "bg-slate-200"} px-3 py-1 cursor-pointer`}>dark blue</p>
          </div>
        </div>
      </div>

      <div className='flex gap-2 mt-2'>
        <input onChange={() => setBestseller(prev => !prev)} checked={bestseller} type="checkbox" id="bestseller" />
        <label className='cursor-pointer' htmlFor="bestseller">Add to bestseller</label>
      </div>

      <button type="submit" className='w-28 py-3 mt-4 bg-black text-white '>Add</button>
    </form>
  )
}

export default Add