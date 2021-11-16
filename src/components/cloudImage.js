export function CloudImage({src, title}) {
    return (
        <img
            src={src}
            onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://robohash.org/${title}?size=310x310`
            }}
        />
//         <img
//             alt={''}
//             src={`https://robohash.org/${title}?size=310x310`}
//         />
    )
}
