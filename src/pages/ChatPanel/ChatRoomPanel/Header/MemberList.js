import React from 'react'
import styles from './styles'

const MemberListRearrangement = (memberList, user) => {
   let result = memberList.reduce((result, member) => {
      if (member === user) {
         result.unshift(member)
      } else {
         result.push(member)
      }
      return result
   }, [] )
   if(!result.includes(user)) {result.unshift(user)}
   return result
}

const MemberName = (member, user) => (
   (member === user) ?
      <span key={member} style={styles.userName}>{member}</span>
   :
      <span key={member} style={styles.memberName}>{`, ${member}`}</span>
)

const MemberList = ({memberList, user}) => (
   <div style={styles.memberList}>
      {MemberListRearrangement(memberList, user).map((member) => MemberName(member, user))}
   </div>
)

export default MemberList
