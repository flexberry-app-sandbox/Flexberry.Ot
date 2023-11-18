package Ot.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Ot.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПутевойЛист
 */
@Entity(name = "IISOtПутевойЛист")
@Table(schema = "public", name = "ПутевойЛист")
public class PutevojList {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ВыдатьТоплива")
    private Integer выдатьтоплива;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "СопровожЛица")
    private String сопровожлица;

    @Column(name = "ГаражНомер")
    private Integer гаражномер;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "TranspSr")
    @Convert("TranspSr")
    @Column(name = "ТранспСр", length = 16, unique = true, nullable = false)
    private UUID _transpsrid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "TranspSr", insertable = false, updatable = false)
    private TranspSr transpsr;


    public PutevojList() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getВыдатьТоплива() {
      return выдатьтоплива;
    }

    public void setВыдатьТоплива(Integer выдатьтоплива) {
      this.выдатьтоплива = выдатьтоплива;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getСопровожЛица() {
      return сопровожлица;
    }

    public void setСопровожЛица(String сопровожлица) {
      this.сопровожлица = сопровожлица;
    }

    public Integer getГаражНомер() {
      return гаражномер;
    }

    public void setГаражНомер(Integer гаражномер) {
      this.гаражномер = гаражномер;
    }


}