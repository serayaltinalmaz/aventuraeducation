import React from "react";
import { useState, createContext } from "react";
export const SupportFakeDataContext = createContext();


const SupportFakeDataProvider = ({ children }) => {
    const [SupportFakeData, setSupportFakeData] = useState(SupportFakeDataObj);
    const data = { SupportFakeData, setSupportFakeData };
    return (
        <SupportFakeDataContext.Provider value={data}>
            {children}
        </SupportFakeDataContext.Provider>
    )
}

export default SupportFakeDataProvider
export const SupportFakeDataObj = [
    {
        "id": 1,
        "firstName": "Torey",
        "lastName": "Courtin",
        "phone": "+1 (626) 277-5271",
        "email": "tcourtin0@issuu.com",
        "subject": "cubilia",
        "message": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
    },
    {
        "id": 2,
        "firstName": "Kristos",
        "lastName": "Widdicombe",
        "phone": "+48 (508) 837-1880",
        "email": "kwiddicombe1@skype.com",
        "subject": "cubilia",
        "message": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
    },
    {
        "id": 3,
        "firstName": "Harland",
        "lastName": "Formby",
        "phone": "+1 (325) 990-2703",
        "email": "hformby2@japanpost.jp",
        "subject": "augue",
        "message": "Fusce consequat. Nulla nisl. Nunc nisl."
    },
    {
        "id": 4,
        "firstName": "Janice",
        "lastName": "Bloom",
        "phone": "+86 (943) 946-9246",
        "email": "jbloom3@nifty.com",
        "subject": "scelerisque",
        "message": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem."
    },
    {
        "id": 5,
        "firstName": "Shanie",
        "lastName": "Claris",
        "phone": "+593 (853) 587-0183",
        "email": "sclaris4@nature.com",
        "subject": "dui",
        "message": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."
    },
    {
        "id": 6,
        "firstName": "Ozzy",
        "lastName": "Softley",
        "phone": "+57 (748) 997-5478",
        "email": "osoftley5@gizmodo.com",
        "subject": "sapien",
        "message": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem."
    },
    {
        "id": 7,
        "firstName": "Gussy",
        "lastName": "Dunstone",
        "phone": "+92 (952) 829-1818",
        "email": "gdunstone6@netvibes.com",
        "subject": "consequat",
        "message": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus."
    },
    {
        "id": 8,
        "firstName": "Miller",
        "lastName": "Blaxland",
        "phone": "+51 (572) 983-8011",
        "email": "mblaxland7@whitehouse.gov",
        "subject": "venenatis",
        "message": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
    },
    {
        "id": 9,
        "firstName": "Peggie",
        "lastName": "Bedbury",
        "phone": "+81 (104) 415-1304",
        "email": "pbedbury8@hc360.com",
        "subject": "diam",
        "message": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    },
    {
        "id": 10,
        "firstName": "Vivyan",
        "lastName": "Tiron",
        "phone": "+86 (188) 622-9322",
        "email": "vtiron9@printfriendly.com",
        "subject": "enim",
        "message": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros."
    },
    {
        "id": 11,
        "firstName": "Lila",
        "lastName": "Coat",
        "phone": "+86 (774) 361-9077",
        "email": "lcoata@github.io",
        "subject": "ac",
        "message": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus."
    },
    {
        "id": 12,
        "firstName": "Minta",
        "lastName": "Shelborne",
        "phone": "+86 (942) 543-0891",
        "email": "mshelborneb@statcounter.com",
        "subject": "vulputate",
        "message": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
    },
    {
        "id": 13,
        "firstName": "Vidovic",
        "lastName": "Redmond",
        "phone": "+691 (662) 455-9941",
        "email": "vredmondc@ftc.gov",
        "subject": "est",
        "message": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
    },
    {
        "id": 14,
        "firstName": "Ebba",
        "lastName": "Serotsky",
        "phone": "+27 (875) 118-4717",
        "email": "eserotskyd@woothemes.com",
        "subject": "amet",
        "message": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem."
    },
    {
        "id": 15,
        "firstName": "Tammara",
        "lastName": "Calloway",
        "phone": "+7 (413) 292-4357",
        "email": "tcallowaye@yolasite.com",
        "subject": "potenti",
        "message": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
    },
    {
        "id": 16,
        "firstName": "Svend",
        "lastName": "Shakesby",
        "phone": "+86 (381) 914-0810",
        "email": "sshakesbyf@upenn.edu",
        "subject": "mollis",
        "message": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl."
    },
    {
        "id": 17,
        "firstName": "Maryjo",
        "lastName": "Honacker",
        "phone": "+970 (981) 995-1066",
        "email": "mhonackerg@independent.co.uk",
        "subject": "adipiscing",
        "message": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
    },
    {
        "id": 18,
        "firstName": "Jareb",
        "lastName": "Cookney",
        "phone": "+234 (494) 555-6026",
        "email": "jcookneyh@opera.com",
        "subject": "orci",
        "message": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus."
    },
    {
        "id": 19,
        "firstName": "Skippy",
        "lastName": "O' Byrne",
        "phone": "+54 (532) 963-8558",
        "email": "sobyrnei@miibeian.gov.cn",
        "subject": "etiam",
        "message": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus."
    },
    {
        "id": 20,
        "firstName": "Coralie",
        "lastName": "Worsall",
        "phone": "+86 (376) 617-0320",
        "email": "cworsallj@nifty.com",
        "subject": "vulputate",
        "message": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque."
    }
]



