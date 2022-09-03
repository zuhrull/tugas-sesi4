import React from "react";
import RepoItem from "./RepoItem";

class RepoList extends React.Component {
  render() {
    return (
      <>
      <div className="repo-list flex-list">
        <RepoItem title={'kalkulator-sederhana'} desc={'Kalkulator dengan fitur dasar perhitungan artimatika'} tag={'Javascript'} status={'Public'} />
        <RepoItem title={'aplikasi-todo'} desc={'Aplikasi untuk mengatur manajemen jadwal'} tag={'React'} status={'Public'} />
        <RepoItem title={'profile-page'} desc={'Contoh halaman profil sebuah website e-commerce'} tag={'HTML'} status={'Private'} />
        <RepoItem title={'assignment-1'} desc={'Tugas MSIB Hacktiv8 Minggu pertama'} tag={'Javascript'} status={'Private'} />
      </div>
      </>
    )
  }
}

export default RepoList;