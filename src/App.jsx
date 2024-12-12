import Contact from "./components/contact"
import cat1 from './assets/cat1.jpeg'
import cat2 from './assets/cat2.jpeg'
import cat3 from './assets/cat3.jpeg'
import cat4 from './assets/cat4.jpeg'

function App() {
      return(
        <>
        <h1 class="tit"># Components in React #</h1>
        <div className="contacts">
          <Contact name="GOLDSPARK"
                    img={cat1}
                    phone="1234567890"
                    mail="goldsppark@gmail.com"/>

          <Contact name="Candy"
                    img={cat2}
                    phone="1234554321"
                    mail="cutecandy@gmail.com"/>

          <Contact name="JACK"
                    img={cat3}
                    phone="1357908642"
                    mail="jackypandian@gmail.com"/>

          <Contact name="RED"
                    img={cat4}
                    phone="1088664422"
                    mail="callmered@gmail.com"/>
          <Contact name="GOLDSPARK"
                    img={cat1}
                    phone="1234567890"
                    mail="goldsppark@gmail.com"/>

          <Contact name="Candy"
                    img={cat2}
                    phone="1234554321"
                    mail="cutecandy@gmail.com"/>

          <Contact name="JACK"
                    img={cat3}
                    phone="1357908642"
                    mail="jackypandian@gmail.com"/>

          <Contact name="RED"
                    img={cat4}
                    phone="1088664422"
                    mail="callmered@gmail.com"/>
          
          <Contact name="GOLDSPARK"
                    img={cat1}
                    phone="1234567890"
                    mail="goldsppark@gmail.com"/>

          <Contact name="Candy2"
                    img={cat2}
                    phone="1234554321"
                    mail="cutecandy@gmail.com"/>

          <Contact name="JACK"
                    img={cat3}
                    phone="1357908642"
                    mail="jackypandian@gmail.com"/>

          <Contact name="RED"
                    img={cat4}
                    phone="1088664422"
                    mail="callmered@gmail.com"/>
          
        </div>
        </>
      )
}

export default App
