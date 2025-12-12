# ex-js-simon-says-dom
Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


Descrizione

-Definire una funzione che mi generi numeri random

-Creare quindi un array vuoto in cui pushare i numeri random generati dalla funzione (che avranno un range da 1 a 50 come parametro) con un ciclo
    -I numeri non si devono ripetere e devono comunque stare in un range deciso, quindi imporrò che 
        SE il numero generato in maniera random è uguale ad un altro numero precedentemente generato non verrà inserito nell'array 
        
        ALTRIMENTI posso pusharlo nell'array
    
    utilizzerò while (array.length < quantità di numeri che voglio) questo mi permetterà di continuare a pushare numeri fin quando la lunghezza dell'array non è uguale alla quantità di numeri che necessito

-Mostrare i numeri a schermo 

-gestire il timer con setTimeOut
Imposterò un timer allo scadere del quale i numeri che ho mostrato a schermo spariranno (d-none) e appariranno il group di input in cui l'utente dovrà inserire le risposte
    -SE l'utente non inserisce niente/Se l'utente inserisce stringhe/Se l'utente inserisce numeri uguali tra i vari input WARNING dal form che gli farà ripetere l'azione
    -ALTRIMENTI colleziona i numeri inseriti dall'utente in un array

-Confronta l'array iniziale con l'array di risposte dell'utente ad esempio si potrebbe vedere se ogni singolo elemento dell'array iniziale è incluso nell'array utente. Tirare fuori il numero degli item uguali tra i due array

-Mostrarlo in pagina
    Se l'utente ha indovinato tutti i 5 numeri scritta verde del risultato verde con complimenti
    Altrimenti scritta nera con il risultato e basta
    altrimenti scritta rossa se ne ha indovinati zero