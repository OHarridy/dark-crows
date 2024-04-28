function Record(org){

    const handleAcceptClick = () => {
    if (window.confirm("Are you sure you want to Accept?")) {
        // User clicked "OK"
        // You can add your logic here
    } else {
        // User clicked "Cancel" or closed the dialog
        // You can add your logic here
    }
    };
    const handleRejectClick = () => {
        if (window.confirm("Are you sure you want to Reject?")) {
            // User clicked "OK"
            // You can add your logic here
        } else {
            // User clicked "Cancel" or closed the dialog
            // You can add your logic here
        }
    };

    return (
        <div className="flex h-auto flex-row justify-between border-2 border-indigo-600">
            <div className="flex flex-col">
                <p className="text-xl">{org.name}</p>
                <p className="text-sm">{org.description}</p>
            </div>
            <div className="icon-conatiner">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z"/></svg>
            </div>
            <div className=" w-1/4 border-2 border-indigo-600 flex justify-between">
                <button onClick={handleAcceptClick} className="text-xs inline-block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Accept</button>
                <button onClick={handleRejectClick} className="text-xs inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Reject</button>
            </div>
        </div>
    );
}

export default Record;
