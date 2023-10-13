export const feedQuery =  `*[_type == "pin"] | order(_createdAt desc) {
    image {
        asset -> {
            url
        }
    },
    _id,
    name,
    
}`;

export const pinDetailQuery = (pinId) => {
  const query = `*[_type == "pin" && _id == '${pinId}']{
    image{
      asset->{
        url
      }
    },
    _id,
    title, 
    about,
    category,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
   save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
    comments[]{
      comment,
      _key,
      postedBy->{
        _id,
        userName,
        image
      },
    }
  }`;
  return query;
};

export const searchQuery = (searchTerm) => {
  const query = `*[_type == "user" && email match '${searchTerm}*' || name match '${searchTerm}*' || parish match '${searchTerm}*' || mobile match '${searchTerm}*']{
    _id,
    destination,            
  }`;
  return query;
};

export const allUserQuery = () => {
  const query = `*[_type == "user"]{
    _id,
    email,
    mobile,
    name,
    parish,
    question,
_createdAt
  } | order(_createdAt desc)`;
  return query;
};

export const userQuery = (userId) => {
  const query = `*[_type == "user" && _id == '${userId}']`;
  return query;
};

export const userQueryByEmail = (email) => {
  const query = `*[_type == "user" && email == '${email}']{
    _id,
    email,
    mobile,
    name,
  }`;
  return query;
};

export const userQueryByMobile = (mobile) => {
  const query = `*[_type == "user" && mobile == '${mobile}']{
    _id,
    email,
    mobile,
    name,
  }`;
  return query;
};

export const userCreatedPinsQuery = (userId) => {
  const query = `*[ _type == 'pin' && userId == '${userId}'] | order(_createdAt desc){
    image{
      asset->{
        url
      }
    },
    _id,
    destination,
    postedBy->{
      _id,
      userName,
      image
    },
    save[]{
      postedBy->{
        _id,
        userName,
        image
      },
    },
  }`;
  return query;
};
