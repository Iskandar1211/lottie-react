export type UserType = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}

export type CommentType = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export type AlbumType = {
    userId: number,
    id: number,
    title: string
}

export type PhotoType = {
    albumId: number,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}

export type TodoType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string
}