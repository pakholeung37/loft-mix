import { Table } from '../index'

export default {
  title: 'Table',
}

export const Basic = () => {
  return (
    <div>
      <Table size="xs">
        <thead>
          <tr>
            <th colspan="1">firstName</th>
            <th colspan="1">lastName</th>
            <th colspan="1">age</th>
            <th colspan="1">visits</th>
            <th colspan="1">status</th>
            <th colspan="1">progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tanner</td>
            <td>linsley</td>
            <td>24</td>
            <td>100</td>
            <td>In Relationship</td>
            <td>50</td>
          </tr>
          <tr>
            <td>tandy</td>
            <td>miller</td>
            <td>40</td>
            <td>40</td>
            <td>Single</td>
            <td>80</td>
          </tr>
          <tr>
            <td>joe</td>
            <td>dirte</td>
            <td>45</td>
            <td>20</td>
            <td>Complicated</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
      <Table size="sm">
        <thead>
          <tr>
            <th colspan="1">firstName</th>
            <th colspan="1">lastName</th>
            <th colspan="1">age</th>
            <th colspan="1">visits</th>
            <th colspan="1">status</th>
            <th colspan="1">progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tanner</td>
            <td>linsley</td>
            <td>24</td>
            <td>100</td>
            <td>In Relationship</td>
            <td>50</td>
          </tr>
          <tr>
            <td>tandy</td>
            <td>miller</td>
            <td>40</td>
            <td>40</td>
            <td>Single</td>
            <td>80</td>
          </tr>
          <tr>
            <td>joe</td>
            <td>dirte</td>
            <td>45</td>
            <td>20</td>
            <td>Complicated</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
      <Table size="md">
        <thead>
          <tr>
            <th colspan="1">firstName</th>
            <th colspan="1">lastName</th>
            <th colspan="1">age</th>
            <th colspan="1">visits</th>
            <th colspan="1">status</th>
            <th colspan="1">progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tanner</td>
            <td>linsley</td>
            <td>24</td>
            <td>100</td>
            <td>In Relationship</td>
            <td>50</td>
          </tr>
          <tr>
            <td>tandy</td>
            <td>miller</td>
            <td>40</td>
            <td>40</td>
            <td>Single</td>
            <td>80</td>
          </tr>
          <tr>
            <td>joe</td>
            <td>dirte</td>
            <td>45</td>
            <td>20</td>
            <td>Complicated</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
      <Table size="lg">
        <thead>
          <tr>
            <th colspan="1">firstName</th>
            <th colspan="1">lastName</th>
            <th colspan="1">age</th>
            <th colspan="1">visits</th>
            <th colspan="1">status</th>
            <th colspan="1">progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tanner</td>
            <td>linsley</td>
            <td>24</td>
            <td>100</td>
            <td>In Relationship</td>
            <td>50</td>
          </tr>
          <tr>
            <td>tandy</td>
            <td>miller</td>
            <td>40</td>
            <td>40</td>
            <td>Single</td>
            <td>80</td>
          </tr>
          <tr>
            <td>joe</td>
            <td>dirte</td>
            <td>45</td>
            <td>20</td>
            <td>Complicated</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export const Variant = () => {
  return (
    <div>
      <Table variant="simple">
        <thead>
          <tr>
            <th colspan="1">firstName</th>
            <th colspan="1">lastName</th>
            <th colspan="1">age</th>
            <th colspan="1">visits</th>
            <th colspan="1">status</th>
            <th colspan="1">progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tanner</td>
            <td>linsley</td>
            <td>24</td>
            <td>100</td>
            <td>In Relationship</td>
            <td>50</td>
          </tr>
          <tr>
            <td>tandy</td>
            <td>miller</td>
            <td>40</td>
            <td>40</td>
            <td>Single</td>
            <td>80</td>
          </tr>
          <tr>
            <td>joe</td>
            <td>dirte</td>
            <td>45</td>
            <td>20</td>
            <td>Complicated</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
      <Table variant="striped">
        <thead>
          <tr>
            <th colspan="1">firstName</th>
            <th colspan="1">lastName</th>
            <th colspan="1">age</th>
            <th colspan="1">visits</th>
            <th colspan="1">status</th>
            <th colspan="1">progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tanner</td>
            <td>linsley</td>
            <td>24</td>
            <td>100</td>
            <td>In Relationship</td>
            <td>50</td>
          </tr>
          <tr>
            <td>tandy</td>
            <td>miller</td>
            <td>40</td>
            <td>40</td>
            <td>Single</td>
            <td>80</td>
          </tr>
          <tr>
            <td>joe</td>
            <td>dirte</td>
            <td>45</td>
            <td>20</td>
            <td>Complicated</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
      <Table variant="bordered">
        <thead>
          <tr>
            <th colspan="1">firstName</th>
            <th colspan="1">lastName</th>
            <th colspan="1">age</th>
            <th colspan="1">visits</th>
            <th colspan="1">status</th>
            <th colspan="1">progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tanner</td>
            <td>linsley</td>
            <td>24</td>
            <td>100</td>
            <td>In Relationship</td>
            <td>50</td>
          </tr>
          <tr>
            <td>tandy</td>
            <td>miller</td>
            <td>40</td>
            <td>40</td>
            <td>Single</td>
            <td>80</td>
          </tr>
          <tr>
            <td>joe</td>
            <td>dirte</td>
            <td>45</td>
            <td>20</td>
            <td>Complicated</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
      <Table variant="unstyled">
        <thead>
          <tr>
            <th colspan="1">firstName</th>
            <th colspan="1">lastName</th>
            <th colspan="1">age</th>
            <th colspan="1">visits</th>
            <th colspan="1">status</th>
            <th colspan="1">progress</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tanner</td>
            <td>linsley</td>
            <td>24</td>
            <td>100</td>
            <td>In Relationship</td>
            <td>50</td>
          </tr>
          <tr>
            <td>tandy</td>
            <td>miller</td>
            <td>40</td>
            <td>40</td>
            <td>Single</td>
            <td>80</td>
          </tr>
          <tr>
            <td>joe</td>
            <td>dirte</td>
            <td>45</td>
            <td>20</td>
            <td>Complicated</td>
            <td>10</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
