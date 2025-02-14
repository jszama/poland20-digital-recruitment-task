'use client';

import Input from '@/components/Input';
import TransparentButton from '@/components/button/TransparentButton';
import H5 from '@/components/heading/H5';
import { type ChangeEvent, useState } from 'react';
import validateEmail from './validate.ts';

export default function Newsletter() {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [email, setEmail] = useState('');

	const [nameError, setNameError] = useState('');
	const [surnameError, setSurnameError] = useState('');
	const [emailError, setEmailError] = useState('');

	const handleSubmit = (name: string, surname: string, email: string) => {
		console.log(name, surname, email);
	};

	return (
		<section className="newsletter">
			<H5>Bądź na bieżąco!</H5>
			<section className="newsletter-container">
				<p>Zostań częścią społeczności Poland 2.0! Dołącz już dzisiaj i mailowo otrzymuj najnowsze informacje o naszych wydarzeniach i inicjatywach!</p>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						if (name === '') {
							setNameError('Proszę wpisać imię.');
							return;
						}
						if (surname === '') {
							setSurnameError('Proszę wpisać nazwisko.');
							return;
						}
						if (email === '') {
							setEmailError('Proszę wpisać adres e-mail.');
							return;
						}
						if (!validateEmail(email)) {
							setEmailError('Proszę wpisać poprawny adres e-mail.');
							return;
						}

						handleSubmit(name, surname, email);
					}}
				>
					<Input
						type="text"
						placeholder="Imię"
						value={name}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setName(e.target.value);
							setNameError('');
						}}
					/>
					{nameError !== '' && <p className="error-message">{nameError}</p>}

					<Input
						type="text"
						placeholder="Nazwisko"
						value={surname}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setSurname(e.target.value);
							setSurnameError('');
						}}
					/>
					{surnameError !== '' && <p className="error-message">{surnameError}</p>}

					<Input
						type="text"
						placeholder="Adres e-mail"
						value={email}
						onChange={(e: ChangeEvent<HTMLInputElement>) => {
							setEmail(e.target.value);
							setEmailError('');
						}}
					/>
					{emailError !== '' && <p className="error-message">{emailError}</p>}
					<TransparentButton type="submit">Zapisz się</TransparentButton>
				</form>
			</section>
		</section>
	);
}
