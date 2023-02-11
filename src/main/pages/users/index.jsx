import {UsersTable} from '../../components/users/UsersTable';
import {UserDetails} from '../../components/users/UserDetails';
import {useCallback, useState} from 'react';
import {UserAlbumsModal} from '../../components/users/UserAlbumsModal';

export const UsersPage = () => {
    const [openAlbumsModal, setOpenAlbumsModal] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(0);

    const handleOpenAlbumsModal = useCallback(
        () => {
            setOpenAlbumsModal(prevState => !prevState);
        },
        [],
    );

    return (
        <>
            <UsersTable handleOpenAlbumsModal={handleOpenAlbumsModal} setSelectedUserId={setSelectedUserId}/>
            <UserAlbumsModal handleOpenAlbumsModal={handleOpenAlbumsModal} openAlbumsModal={openAlbumsModal}
                             selectedUserId={selectedUserId}/>
        </>
    );
};

export const UserDetailsPage = () => {
    return (
        <UserDetails/>
    );
};

