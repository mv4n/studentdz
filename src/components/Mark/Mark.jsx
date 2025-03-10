function Mark({mark, key}) {
    const marksVariants = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    function handleSelectChange(e) {
        console.log(e);
        
    }

    return (
        <select className="mark" defaultValue={mark} key={key} onChange={handleSelectChange}>
            <option value="-">-</option>
            {
                marksVariants.map((markVar) => {
                    return (
                        <option key={markVar} value={markVar}>{markVar}</option>
                    )
                })
            }
        </select>
    )
}

export default Mark