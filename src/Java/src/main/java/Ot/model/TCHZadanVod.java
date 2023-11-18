package Ot.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ot.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: ТЧЗаданВод
 */
@Entity(name = "IISOtТЧЗаданВод")
@Table(schema = "public", name = "ТЧЗаданВод")
public class TCHZadanVod {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Расстояние")
    private Double расстояние;

    @Column(name = "ДатаВремя")
    private Date датавремя;

    @Column(name = "ПунктНазнач")
    private String пунктназнач;

    @Column(name = "ПунктОтправ")
    private String пунктотправ;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontragent")
    @Convert("Kontragent")
    @Column(name = "Контрагент", length = 16, unique = true, nullable = false)
    private UUID _kontragentid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontragent", insertable = false, updatable = false)
    private Kontragent kontragent;


    public TCHZadanVod() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getРасстояние() {
      return расстояние;
    }

    public void setРасстояние(Double расстояние) {
      this.расстояние = расстояние;
    }

    public Date getДатаВремя() {
      return датавремя;
    }

    public void setДатаВремя(Date датавремя) {
      this.датавремя = датавремя;
    }

    public String getПунктНазнач() {
      return пунктназнач;
    }

    public void setПунктНазнач(String пунктназнач) {
      this.пунктназнач = пунктназнач;
    }

    public String getПунктОтправ() {
      return пунктотправ;
    }

    public void setПунктОтправ(String пунктотправ) {
      this.пунктотправ = пунктотправ;
    }


}