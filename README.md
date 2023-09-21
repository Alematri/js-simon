Simon Says
===
## Consegna
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi i numeri scompaiono e l’utente deve inserire, tramite il prompt(), uno alla volta, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
===
## Procedimento Consegna
1. Dichiarazione delle Variabili e delle Costanti:
Dichiariamo le variabili per memorizzare i numeri generati, i numeri inseriti dall'utente e i numeri indovinati, costanti per il numero totale di numeri da generare e il tempo di attesa prima che i numeri scompaiano.

2. Funzione per Generare Numeri Casuali:
Crea una funzione per generare i numeri casuali. Utilizza un ciclo per generare 5 numeri univoci compresi tra 1 e 100 e memorizzali nell'array dei numeri generati.

4. Funzione che fa scomparire i numeri generati casualmente dal video e funzione per avviare il prompt di inserimento poco dopo che i numeri siano scomparsi

5. Funzione per Inserire i Numeri:
Crea una funzione che richieda all'utente di inserire i numeri che ha memorizzato, uno alla volta. Memorizza questi numeri nell'array dei numeri inseriti dall'utente.

6. Funzione per verificare quanti numeri sono stati indovinati.

7. Funzione per confrontare i numeri inseriti dall'utente con quelli generati randomicamente.

8. Aggiunta di un event listener per avviare il gioco al click del pulsante

9. Due funzioni per nascondere e mostrare il pulsante di avvio al momento giusto.

10. Funzione per resettare la visualizzazione