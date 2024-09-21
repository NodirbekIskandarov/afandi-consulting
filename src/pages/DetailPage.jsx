import React from "react";
import styles from "./detailpage.module.scss";
import { useParams } from "react-router-dom";
function DetailPage() {
    const pk = useParams()
    console.log(pk, "pk")
  return (
    <div className={styles.detail_page}>
      <div className={styles.title_part}>
        <span>Bangor University</span>
        <span>
          Transform Your Life and Impact the World with Our Globally Accredited
          Courses
        </span>
      </div>
      <img src="" alt="" />
      <div className={styles.text_part}>
        <span>
          Our Mission  A strong, confident institution recognised regionally,
          nationally and internationally as a centre of excellence for its
          varied portfolio of teaching and research, and for the unique,
          multicultural, inclusive experience it provides for its staff and
          students. A reputation for excellence Bangor University has a long
          tradition of academic excellence and a strong focus on the student
          experience. Around 10,000 students currently study at the University,
          with teaching staff based within fourteen Academic Schools. Bangor
          University’s research has been ranked highly in the Government’s most
          recent Research Excellence Framework (REF2021), with 85% judged to be
          world-leading (4*) or internationally excellent (3*). High Academic
          Quality Endorsed by QAA The Quality Assurance Agency’s (QAA)
          Institutional Review has commended the way the university manages
          academic quality. We received a number of commendations which
          highlighted particular areas of strength, including the way in which
          we use a data-driven approach to inform and enhance the student
          experience. Other areas which received commendations were the
          University’s partnership with students, and the fact that bilingualism
          is embedded within all aspects of the student experience. The
          University has responded to the QAA report with its action plan. A
          range of expertise The University is made up of three Colleges housing
          nine academic Schools, as well as over fifty specialist research
          centres, enabling the provision of courses spanning the Arts,
          Humanities and Sciences. Highly rated courses and lecturers We offer
          hundreds of courses across the arts, humanities and sciences. We pride
          ourselves on the quality of our teaching and our courses and lecturers
          were rated second in the UK at the What Uni Student Choice Awards
          2018. Committed to sustainability Bangor University is committed to
          sustainable development and global citizenship. We aim to promote
          sustainability in research, business and enterprise activities. Much
          of what we do is based on our desire to bring sustainability to life,
          whether through our teaching, research or public engagement. We have
          the ISO14001:2015 accreditation for environmental management, and a
          range of sustainability measures in place, including high rankings in
          world Sustainability League tables. For more information on the wider
          sustainability agenda at Bangor University, visit our Sustainability
          webpages. Bangor’s location is unrivalled Bangor’s location – close to
          the mountains and the sea – has been described as the best university
          setting in the UK. In 2016 North Wales was named as the 4th best
          region in the world to visit by the travel guide Lonely Planet due to
          its stunning location and “shiny new adventure sports facilities”.
          Investment in facilities The University’s recent investments in
          facilities and services include the Pontio Arts and Innovation centre,
          a multi-million pound development which includes teaching facilities a
          theatre, cinema, bar, cafes and an innovation space. Pontio is also
          home to our Students’ Union. Other investment is the redevelopment of
          the University’s sports facilities at Canolfan Brailsford. The Bangor
          student experience  Student life at Bangor University is vibrant and
          diverse. We have more than 150 Students’ Union Clubs and Societies,
          covering a range of interests, activities and sports, which means
          there’s something for everyone. Student membership is free, so all our
          students can take advantage of the extra-curricular opportunities
          offered. Our Clubs and Societies were named best in the UK at the
          WhatUni Student Choice Awards 2019. Students are given help and
          support from the moment they arrive. Our Student Services
          Centre provides advice and guidance on matters from money and housing
          to disability support, counselling, dyslexia, study skills and local
          faith provision. Every year hundreds of second and third year students
          are trained as Peer Guides to welcome new students to Bangor and
          provide practical advice to help them settle-in. High standard of
          accommodation Bangor University’s accommodation was rated third in the
          UK in the 2019 Whatuni Student Choice Awards. We guarantee
          accommodation for first year students who select Bangor as their Firm
          Choice and apply before the given deadline. Links and partnerships We
          have close links with business and the NHS in Wales through the Besti
          Cadwaladr University Health Board. The University is a major provider
          of training and education for the NHS and is also one of the main
          partners in the North Wales Clinical School. *excluding specialist
          institutions and single-submission universities
        </span>
      </div>

      <div className={styles.requirment}>
        <span>
        Document
        </span>
        <ul>
            <li>nimas</li>
        </ul>
      </div>
    </div>
  );
}

export default DetailPage;
