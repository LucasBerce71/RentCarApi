type TRentCarStatus = 'Rented' | 'Dealing' | 'Abandoned';

interface IRentCarModel {
    id: string | number;
    carId: string | number;
    clientId: string | number;
    price: number;
    status: TRentCarStatus;
}