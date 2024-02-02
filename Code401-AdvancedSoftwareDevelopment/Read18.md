# Read: Class 18

# Readings: Cryptography

## Why Is This Important?

- Overall, these cryptographic concepts underpin the secure functioning of the internet and digital technologies we rely on daily. They protect our communication, finances, and sensitive information, fostering trust and privacy in the digital age.

## Reading Questions


1. What is the basic principle behind the Caesar Cipher, and how was it used historically?

- Caesar Cipher:

Principle: This simple substitution cipher shifts each letter of the message by a fixed number of positions down the alphabet. For example, shifting by 3 would turn "hello" into "khoor."
Historical Use: Julius Caesar reportedly used a similar cipher for military communication, though historical accuracy is debated. It remained popular for centuries due to its ease of use but vulnerability to cryptanalysis.

2. What are the key differences between symmetric and asymmetric encryption? How is asymmetric used in secure communication today?

- Symmetric vs. Asymmetric Encryption:

Symmetric: Uses a single shared secret key for both encryption and decryption. Efficient for encrypting large amounts of data, but key distribution can be challenging.
Asymmetric: Uses separate public and private keys. Anyone can encrypt with the public key, but only the intended recipient with the private key can decrypt. Secure for communication without shared secrets.

Secure Communication with Asymmetric Encryption:

Digital Signatures: Sender digitally signs messages with their private key, proving authenticity and integrity.
Secure Sockets Layer (SSL/TLS): Websites use public-key cryptography to establish secure connections with your browser, protecting data transmission.

3. How do computers generate random numbers, and what are the differences between true random number generation (TRNG) and pseudo-random number generation (PRNG)? Discuss their use cases in cryptography.

- Random Number Generation:

True Random Number Generator (TRNG): Uses physical processes like dice rolls or atmospheric noise to generate unpredictable numbers. Ideal for security-critical applications but can be expensive.
Pseudo-Random Number Generator (PRNG): Employs mathematical algorithms to produce seemingly random numbers. Faster and cheaper, but vulnerabilities exist.


4. What’s the difference between encryption and decryption? Explain with an analogy.

- Encryption vs. Decryption:

Think of a locked box:
Encryption: Placing your message inside the box and locking it with a key (only the recipient has the key). The locked box represents the unreadable ciphertext.
Decryption: Using the correct key to unlock the box and retrieve the original message.

