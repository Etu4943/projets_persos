#include <stdio.h>
#include <math.h>
#include <stdlib.h>
#include <stdbool.h>

bool isPrime(int number);

void main(void) {
	int nbMax;
	int nbPrimes = 0;
	printf("Jusqu'a combien voulez-vous aller : ");
	scanf_s("%d", &nbMax);
	for (int iPrime = 1; iPrime < nbMax; iPrime++) {
		if (isPrime(iPrime)) {
			nbPrimes++;
			printf("%-2d : %-3d\n", nbPrimes, iPrime);
		}	
	}
	printf("\nIl y a au total : %d nombres premiers entre 1 et %d\n", nbPrimes,nbMax);
}

bool isPrime(int number) {
	int temp = number -1;

	if (number % 2 == 0)
		return false;
	
	while (temp > 1) {
		if ((number % temp) == 0)
			return false;
		temp--;
	}

	return true;
}
