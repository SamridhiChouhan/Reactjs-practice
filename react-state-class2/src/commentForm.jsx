import { useState } from "react" ;
import { useFormik } from 'formik';

function CommentForm ({addNewComment}){
   // let [formData , setFormData] = useState({
   //    username : "" ,
   //    remark : "" ,
   //    rating : 5
   // })
   const validate = (values, props /* only available when using withFormik */) => {
   const errors = {};
 
   if (!values.username) {
     errors.username = 'Username is required';
   }

   if (!values.remark) {
     errors.remark = 'Remark is required';
   }

   if (!values.rating) {
     errors.rating = 'Rating is required';
   }
 
   return errors;
   };

   const formik = useFormik({
     initialValues: {
       username: '',
       remark: '',
       rating: '',
     },
     validate,
     onSubmit: (values,{resetForm} )=> {
       alert(JSON.stringify(values, null, 2));
       addNewComment(values);       // ✅ Add the comment to parent
       resetForm();                 // ✅ Reset the form after submission

     },
     
   });

   
 


   // let handleInputChange = (event)=>{
   //    setFormData((currData)=> {
   //       return {
   //          ...currData ,
   //          [event.target.name] : event.target.value
   //       };
   //    });
   // };

   // let handleSubmit = (event) =>{
   //    addNewComment(formData);
   //    console.log(formData);
   //    event.preventDefault();
   //    setFormData({
   //        username : "" ,
   //        remark : "" ,
   //        rating : 5
   //    })
   // }

   return (
    <>
     <h2>Leave a comment !</h2>
     
     <form onSubmit={formik.handleSubmit} >
         {formik.errors.username && formik.touched.username && <div style={{color:"red"}}>{formik.errors.username}</div>}
         <label htmlFor="username">Username : </label>
         <input type="text" id="username" placeholder="Enter username" value={formik.values.username} onChange={formik.handleChange} name="username"/><br /> <br />
         {/* {formik.errors.username && formik.touched.username && <div style={{color:"red"}}>{formik.errors.username}</div>} */}

         {formik.errors.remark && formik.touched.remark && <div style={{color:"red"}}>{formik.errors.remark}</div>}
         <label htmlFor="remark">Remark : </label>
         <textarea id="remark" placeholder="Leave a comment" value={formik.values.remark} onChange={formik.handleChange} name="remark"></textarea><br /><br />
    
         {formik.errors.rating && formik.touched.rating && <div style={{color:"red"}}>{formik.errors.rating}</div>}
         <label htmlFor="rating">Rate us : </label>
         <input type="number" id="rating"  value={formik.values.rating} min={1} max={5} onChange={formik.handleChange} name="rating"/>

         <br /><br />
         <button type="submit">Add Comment</button>
     </form>
    </>
   )
}


export default CommentForm