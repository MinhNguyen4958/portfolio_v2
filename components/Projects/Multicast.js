export default function Messenger() {
    return ( 
        <p>
            Multicast Messenger: a network of a single server and multiple sender clients/receiver clients,
            communicating through TCP protocol. A sender sends lines of text to all currently connected receivers, 
            whether from console inputs or redirected files. <br/>
            <p className="font-bold"> C with POSIX pthread library</p>
        </p>
    )
}