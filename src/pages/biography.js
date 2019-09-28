import React from "react"
import Layout from "../components/Layout"
import bioStyles from "../styles/Biography.module.scss"

const biography = () => {
  return (
    <Layout>
      <div className={bioStyles.wrapper}>
        <div className={bioStyles.box}>
          <h3>
            Kim jesteśmy? Grupą nastolatków, która pokazuje, że jak się bardzo
            chce, to można!
          </h3>
          <p>
            <strong>Ductile Drivers</strong> to polski zespół grający szeroko
            pojętą muzykę rockową. Powstał w 2019 roku w Jarosławiu. Grupa
            zadebiutowała singlem "The Man Who Stole My Ice", a po niedługim
            czasie ukazał się ich kolejny utwór zatytułowany "i love you. just
            kidding". 28 sierpnia miała miejsce oficjalna premiera
            debiutanckiego albumu Ductile Drivers pt. "Lack", na który składa
            się osiem premierowych piosenek. Zespół stawia na różnorodność
            muzyczną. W całej dyskografii ostre, przesterowane gitary
            przeplatają się z bardziej wyszukanymi, funkowymi brzmieniami rodem
            z lat 70. W efekcie daje to nową jakość, w której odnajdą się
            zwolennicy różnych typów muzyki rockowej i nie tylko!
          </p>
          <div className={bioStyles.bandMembers}>
            <p>Skład zespołu:</p>
            <p>
              <strong>Jakub Strawa</strong> - wokal prowadzący, gitara, pianino
            </p>
            <p>
              <strong>Krzysztof Grzeczka</strong> - wokal, gitara
            </p>
            <p>
              <strong>Aleksandra Wyczawska</strong> - gitara basowa
            </p>
            <p>
              <strong>Miłosz Trelka</strong> - perkusja
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default biography
