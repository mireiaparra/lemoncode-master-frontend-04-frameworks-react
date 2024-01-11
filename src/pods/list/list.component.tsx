import React from 'react';
import { Member } from './list.vm';
import { Link } from 'react-router-dom';
import { routes } from '../../router';
import { Organization } from '../../core';
import { Button, Grid, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material';

interface Props {
    members: Member[];
    organization: string;
    setOrganization: (organization: string) => void;
    search: () => void;
    page: number;
    setPage: (page: number) => void;
    lastPage: number;
}

export const ListComponent:React.FC<Props> = (props) => {
    const { members, organization, setOrganization, search, page, setPage, lastPage } = props;
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOrganization(event.target.value);
    }

    const handleSearchClick = () => {
        search();
    }

    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

    return (
        <Grid container sx={{p:3}}>
            <Grid item xs={8}>
                <h2>List page</h2>
            </Grid>
            <Grid item sx={{mb:2}}>
                <TextField variant="standard" label="Organization" value={organization} onChange={handleSearch}/>
            <Button variant="contained" onClick={handleSearchClick}>Search</Button>
            </Grid>
          <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table sx={{minWidth:650}} size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell className="list-header">Avatar</TableCell>
                            <TableCell className="list-header">Id</TableCell>
                            <TableCell className="list-header">Name</TableCell>
                            <TableCell className="list-header"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            {
                                members.map(member =>
                                    <TableRow key={member.id} className="list-user-list-container">
                                        <TableCell><img src={member.avatar_url}/></TableCell>
                                        <TableCell>{member.id}</TableCell>
                                        <TableCell>{member.login}</TableCell>
                                        <TableCell>
                                            <Link to={routes.detail(member.login)}>See detail</Link>
                                        </TableCell>
                                    </TableRow>
                                )
                            }
              
                    </TableBody>
                </Table>
                </TableContainer>
          </Grid>
            <Grid item xs={10}>
                <Pagination
                count={lastPage}
                page={page}
                onChange={handlePageChange}
                />
            </Grid>
            </Grid>
      );
}