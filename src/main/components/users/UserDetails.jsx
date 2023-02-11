import {useEffect, useMemo, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Card, CardContent, CardMedia} from '@mui/material';
import {getUser, getUserPosts, selectIsLoading, selectPosts} from '../../../store/usersSlice';
import {useDispatch, useSelector} from 'react-redux';

export const UserDetails = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {id} = useParams();
    const [user, setUser] = useState({});

    const postsData = useSelector(selectPosts);
    const isPostsLoading = useSelector(selectIsLoading);

    useEffect(() => {
        if (location.state?.user) {
            setUser(location.state.user);
        } else {
            dispatch(getUser(id)).unwrap()
                .then((res) => {
                    setUser(res);
                });
        }
    }, [location, id, dispatch]);

    useEffect(() => {
        if (user?.id) dispatch(getUserPosts(user?.id));
    }, [user, dispatch]);


    const posts = useMemo(() => {
        if (postsData && postsData?.length > 0) {
            return postsData;
        }
        return [];
    }, [postsData]);

    return (
        <div className="w-full flex flex-col mt-[50px]">
            <Paper className="h-full mx-24 rounded mt-12">
                <Box display="flex" justifyContent="space-evenly">
                    <Typography variant="h4" component="h6">
                        {user.name}
                    </Typography>
                    <Typography variant="h4" component="h6">
                        Posts
                    </Typography>
                </Box>
                <Box display="flex" flexWrap="wrap" gap="16px" className="mt-16">
                    <>
                        {isPostsLoading ? 'posts loading' :
                            posts?.map((post) => (
                                <Card key={post.id} sx={{maxWidth: 345}} className="shadow-2xl">
                                    <CardMedia
                                        component="img"
                                        alt="post"
                                        height="130px"
                                        image="https://images.squarespace-cdn.com/content/v1/57263bf8f8baf385ff61bb09/1535668320137-NZQPOXCGLFT34I9E4Z1E/Screen+Shot+2018-08-30+at+6.17.10+PM.png"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {post.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.body}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                    </>
                </Box>
            </Paper>
        </div>
    );
};
