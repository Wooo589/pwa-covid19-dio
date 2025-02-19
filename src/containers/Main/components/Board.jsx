import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
  const { cases, todayCases, active, critical, deaths, todayDeaths, recovered, totalTests, casesPerOneMillion, deathsPerOneMillion, testsPerOneMillion } = data

  const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={3}>
        <Card value={getValue(totalTests)} label=" Total de testes" color="#0f0" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayCases)} label="Casos hoje" color="#9B8DFF" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(active)} label=" Casos ativos" color="#FF0" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(critical)} label=" Casos críticos" color="#f00" />
      </Grid>

      <Grid item xs={12} md={3}>
        <Card value={getValue(cases)} label="Total de casos" color="#5d78ff" />
      </Grid>




      <Grid item xs={12} md={3}>
        <Card value={getValue(recovered)} label="Total de recuperados" color="#67C887" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deaths)} label="Total de mortos" color="#E95078" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(casesPerOneMillion)} label=" Casos por milhão" color="#545454" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(deathsPerOneMillion)} label=" Mortes por milhão" color="#2a2a2a" />
      </Grid>
      <Grid item xs={12} md={3}>
        <Card value={getValue(testsPerOneMillion)} label=" Testes por milhão" color="#040404" />
      </Grid>
    </Grid>
  )
}

export default memo(Board)