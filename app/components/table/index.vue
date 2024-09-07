<template>
  <table>
    <thead>
      <TableTr class="bg-bg/50">
        <th class="text-left px-2 py-1">Study Name</th>
        <th class="text-left px-2 py-1">Study Type</th>
        <th class="text-left px-2 py-1">Study Duration</th>
        <th class="text-left px-2 py-1">Study Location</th>
        <th class="text-left px-2 py-1">Study Date</th>
        <th class="text-left px-2 py-1">Action</th>
      </TableTr>
    </thead>
    <tbody class="">
      <TableTr v-for="i in 10" :key="i" :isMarked="i % 2 === 0">
        <TableTd>Study Name</TableTd>
        <TableTd>Study Type</TableTd>
        <TableTd>Study Duration</TableTd>
        <TableTd>Study Location</TableTd>
        <TableTd>Study Date</TableTd>
        <TableTd>Action</TableTd>
      </TableTr>
    </tbody>
  </table>
</template>
