import { Flex } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const TaskBar = () => {
  return (
    <>
    <Flex w="75%" m="auto" justifyContent="space-around" fontSize="2xl" color="#4ea819">
    <NavLink to="/blog/category">All Categories</NavLink>
    <NavLink to="/blog/management">Management</NavLink>
    <NavLink to="/blog/work">Work</NavLink>
    <NavLink to="/blog/trend">Trend</NavLink>
    <NavLink to="/blog/workspace">Workspace</NavLink>
    <NavLink to="/blog/uncategory">UnCategorized</NavLink>
    </Flex>
    </>
  )
}

export default TaskBar