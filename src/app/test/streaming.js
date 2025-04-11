
export async  function Stream1() {
    await new Promise((resolve) => setTimeout(resolve, 5000)); // Simulate a delay  


    return (
        <div>
            <h1>message</h1>
        </div>
    );
}


export async  function Stream2() {
    await new Promise((resolve) => setTimeout(resolve, 10000)); // Simulate a delay  


    return (
        <div>
            <h1>message</h1>
        </div>
    );
}