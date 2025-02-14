import Tile from '@/components/Tile';
import H2 from '@/components/heading/H2';
import { conversation, development, graduateCap, person, puzzle, workshop } from './assets.ts';

export default function Summit() {
	return (
		<section className="summit">
			<header className="summit-header">
				<H2>Summit 2025</H2>
				<p>Dlaczego nie może Cię zabraknąć na naszej jubileuszowej konferencji?</p>
			</header>
			<section className="summit-tiles">
				<Tile
					icon={puzzle}
					iconAlt="Ikona kawałka układanki"
					title="Spotkanie z ambicją i kreatywnością"
					description="Dołącz do wspólnoty ambitnych polskich studentów z uczelni z całego świata i zbuduj nowe znajomości!"
				/>
				<Tile
					icon={person}
					iconAlt="Ikona człowieka"
					title="Panele dyskusyjne z ekspertami"
					description="Uczestnicz w dyskusjach z światowej klasy ekspertami, naukowcami oraz liderami biznesu, którzy debatują o najistotniejszych problemach naszych czasów i wpływie technologii na ich rozwiązania."
				/>
				<Tile
					icon={workshop}
					iconAlt="Ikona warsztatu"
					title="Interaktywne warsztaty"
					description="Weź udział w warsztatach prowadzonych przez przedstawicieli wiodących funduszy inwestycyjnych i międzynarodowych korporacji."
				/>
				<Tile
					icon={development}
					iconAlt="Ikona linii wykresu idzie w górę"
					title="Rozwój kariery"
					description="Pokaż się ze swojej najlepszej strony i zdobądź potencjalne praktyki albo inne okazję rozwoju swojej kariery w jednej z obecnych na konferencji firm!"
				/>
				<Tile
					icon={graduateCap}
					iconAlt="Ikonka czapki absolwenta"
					title="Edukacja za granicą"
					description="Dowiedz się jak możemy pomóc Ci studiować na najlepszych uczelniach na świecie!"
				/>
				<Tile
					icon={conversation}
					iconAlt="Ikona rozmowy"
					title="Networking i rozrywka"
					description="Nie przegap okazji do spotkań z innymi studentami i prelegentami podczas bankietu oraz uroczystego balu- idealna szansa na wymianę myśli, zawarcie nowych znajomości i niezapomnianą zabawę."
				/>
			</section>
		</section>
	);
}
