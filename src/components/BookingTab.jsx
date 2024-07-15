const BookingTab = ({price}) => {
    return (
        <>
        <div className="text-2xl text-center font-semibold">
                     Price: &#8377;{price} / per night
                   </div>
                   <div className="border  rounded-2xl mt-4">
                        <div className="flex justify-around">
                             <div className="my-4  py-4 px-4 rounded-xl ">
                                <label > Check in :</label>
                                <input type="date" className="bg-transparent" />
                             </div>
                            <div className="my-4 py-4 px-4 rounded-xl ">
                                    <label > Check out :</label>
                                    <input type="date" className="bg-transparent" />
                            </div>
                        </div>
                        <div className="border-t py-3 px-4">
                            <label> Number of guests: </label>
                            <input type="number" value={1}/>
                        </div>
                   </div>
                    <button className="primary mt-2 font-semibold">Book </button>
        </>
    );
}
export default BookingTab