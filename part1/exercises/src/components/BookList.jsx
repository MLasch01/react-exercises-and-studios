import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Books to Read Next";
   let book1 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjiDfJNg_tfd2J0R6MkWOWhxPWgaps6QFf-9-j-9dJNbh5ImGbcPdpmhi3bU2EBtuENvBOjrMld7__yUG2dFwhDBEUsCD7s38gV_iA44ddlGlI2RvmjqUjTqI2SiiHxNSLn9ueze4MJOTm257DGomyxIRzuZ260YTpO7MsWREv1Scc0tTpLjfQ5bVzGg20/s320/GC3fp42akAAMKyl.jpg";
   let book2 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8nxVWI0ew3KLHhdUN4s60k4L98w0m0xQ4GrqIwAFa9fMN9iH0plg1g1rVIE4H6rghwPAije9he9noLpqllGRDFFjgnnHpDlJvVrUPy1XVvkQIe6J7Yd_wbgPklpuJ-v38ixyCcg9xfTNHQsO6bWpZZZVFXx0fr3EmxlKz4Io9F3QntrVyfC-iQr3EbT4/s320/9780593572375.jpg";
   let book3 = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjBIWAHuyvVF98vaoOvTKRCaIhPef6CYyK4DHXFRFztYIw-_o3fS9S7x3Nm2SrlTS4J4rcYTr4hnFwLVSjXcLm64i8EBJDT2LTlrQcwdcuYSSSjcy0nCXwzudy8nJbVbmlNtSntdPkUm3yunoNPnu8RdkjRm8cDXJNffTbJj0ovPU7Ouwn7LsE7dA2RSTY/s320/59808196.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Immortal Dark" />
         <img src={book2} alt="The Monstrous Kind" />
         <img src={book3} alt="When Haru Was Here" />
      </div>      
   );
}



{/* <div>
<h3 className = {classes.choresHeading}>Chores to Finish</h3>
<ol>
   <li className={classes.choresText}>{chores[0]}</li>
   <li className={classes.choresText}>{chores[1]}</li>
</ol>
</div> */}