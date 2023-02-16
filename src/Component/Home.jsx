import prenursery from "./Images1/prenursery.jpg"
import library from "./Images1/Library.jpg"
import building from "./Images1/building.jpg"


function Home() {
  return (
    <>
    <div className="home-container">
      <div className="home-paragraph-1">
      <div className="left-container">
        <p>Welcome to Kosi Model School. Established in the year 2008, it is located at No.18 Grace avenue Elelenwo road in Obio Akpo L.G.A of Rivers State. Its motto is wisdom, knowledge and Excellence. The school is owned by an individual. Our level of education is mainly Nursery and primary, we are co-educational school
(i.e. we educate both boys and girls respectively).</p>
        <p className="team">Team Of Staff</p>
        <p>
      Head Teacher/Administrator</p>
      <p>-Assistant Head Teacher</p>
      <p>-Social Mistress
      </p>
      <p>-Games master</p>
      <p>-Teachers</p>
      <p>-Minders</p>
      <p>-Cleaners</p>
      <p>-Security Guard</p>
      <p>Kosi Model School fully recognize the present educational curriculum introduced by ministry of education. We have gone further to introduce some home training subjects with emphasis on good moral behavior, information technology, music, Arts and
tourism. We build pupils who are outstanding in academics, values and religion. As our motto implies, ‘excellence’ is our goal.</p>  
     </div>
     </div>
     <div className="right-container">
     <img className="display" src={prenursery} alt="school class view" />
     </div>   
   </div>

   
   <div className="display2">
              <div className="display3">
              <img src={library} alt="school library" />
               </div> 
               <div className="display4">
               <img  src={building} alt="school building" />
               </div>

          </div>

         
    </>
  )
}

export default Home
