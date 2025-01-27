import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>VOTE WEBAPP</h1>
      <div className="card">
        <p className='center'>Hier entsteht die Web Application des VOTE Projekts</p>
        <p>
          Das Projekt Visualization of Austrian Parliamentary Elections (VOTE) hat das Ziel, eine innovative Plattform zu schaffen, die die Geschichte der österreichischen Nationalratswahlen von 1945 bis heute digital und visuell aufbereitet. Im Fokus stehen dabei der Aufstieg und die Entwicklung populistischer Themen im politischen Diskurs, insbesondere seit den 1990er Jahren. <br/>

          Die Plattform ermöglicht es Nutzer:innen, Wahlbeteiligung, Parteientwicklung und die Bedeutung populistischer Rhetorik interaktiv zu analysieren. Neben einer visuellen Darstellung wird eine annotierte Datenbank mit Wahlprogrammen erstellt, die für weitere wissenschaftliche Untersuchungen zur Verfügung steht. <br/>

          Durch die interdisziplinäre Zusammenarbeit zwischen digitalen Geisteswissenschaften, Geschichte und Politikwissenschaft liefert das Projekt wertvolle Beiträge zur Erforschung der politischen Landschaft Österreichs und ihrer Entwicklungen.
        </p>
        <h2>Projektziele</h2>
        <ul>
          <li> <p className='bold'>Erstellung einer digitalen Datenbank</p> 
          Alle Wahlprogramme österreichischer Parteien von 1945 bis heute werden digitalisiert, annotiert und systematisch erfasst, um sie für die Analyse nutzbar zu machen.</li>
          <li><p className='bold'>Analyse politischer Rhetorik und populistischer Themen</p>
          Populistische Themen wie Nationalismus, Anti-Establishment-Rhetorik und wirtschaftlicher Protektionismus werden untersucht, um ihre Entwicklung im historischen und politischen Kontext zu verstehen.</li>
          <li><p className='bold'>Entwicklung interaktiver Visualisierungen</p>
          Wichtige Wahltrends, Parteientwicklungen und die Verbreitung populistischer Themen werden durch interaktive Grafiken anschaulich und nutzerfreundlich dargestellt.</li>
          <li><p className='bold'>Erforschung externer Einflüsse</p>
          Das Projekt analysiert, wie gesellschaftliche Faktoren wie Migration, Wirtschaftskrisen oder soziale Veränderungen die Inhalte und Schwerpunkte politischer Programme beeinflusst haben.</li>
          <li><p className='bold'>Bereitstellung von Forschungsergebnissen für die Öffentlichkeit</p>
          Neben wissenschaftlichen Publikationen wird eine nutzerfreundliche Webplattform entwickelt, die Daten und Analysen für ein breites Publikum zugänglich macht.</li>
        </ul>
      </div>
    </>
  )
}

export default App
