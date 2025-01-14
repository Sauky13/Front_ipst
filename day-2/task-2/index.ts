function dataTransform(obj: SourceData1) {
    return {
        id: obj.user_id,
        name: obj.full_name,
        phone: obj.contact.phone,
        email: obj.contact.email,
        location: `${obj.address.city}, ${obj.address.zip}`,
        status: obj.is_active ? "active" : "inactive",
    };
}

const source1: SourceData1 = {
    user_id: "123",
    full_name: "John Doe",
    contact: {
        phone: "+123456789",
        email: "john.doe@example.com",
    },
    address: {
        city: "New York",
        zip: "10001",
    },
    is_active: true,
};

type SourceData1 = {
    user_id: string;
    full_name: string;
    contact: {
        phone: string;
        email: string;
    };
    address: {
        city: string;
        zip: string;
    };
    is_active: boolean;
};

console.log(dataTransform(source1));
