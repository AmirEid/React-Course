import React from "react";
import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./Data";

function App () {
  const entries = data.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        //I coud just pass entry --> each way will imply that i change the props in Entry.
        //obj = {entry}
        //in previous way i need to add obj in Entry props.. to avoid that i could just do this:
        {...entry}
        // img={entry.img}
        // //both ways work
        // // img={{
        // //   src: entry.img.src,
        // //   alt: entry.img.alt,
        // //   href: entry.img.href,
        // //   location: entry.img.location
        // // }}
        // //
        // // img={entry.img.src}
        // // alt={entry.img.alt}
        // // href={entry.img.href}
        // // location={entry.img.location}
        // h1={entry.h1}
        // date={entry.date}
        // paragraph={entry.paragraph}
      />
    );
  })
  return (
    <>
    <Header />
    {entries}
    </>
  );
}



// function App() {
//     return (
//         <>
//           <Header />
//           <Entry 
//             img={{
//               src: "./src/assets/fam1.jpg",
//               alt: "family",
//               href: "https://www.japan.travel/en/",
//               location: "Japan"
//             }}
//             h1= "Mount Fuji"
//             date="2020"
//             paragraph="lalalalalalal"
//           />
//           <Entry 
//             img={{
//               src: "./src/assets/fam2.jpg",
//               alt: "family",
//               href: "https://www.japan.travel/UN/",
//               location: "Brazil"
//             }}
//             h1= "Reo de Janeiro"
//             date="2022"
//             paragraph="bobobobobobobdfdfdfdfdfdddddddddddddddddddddddd"
//           />
//         </>
//     );
// };

export default App;